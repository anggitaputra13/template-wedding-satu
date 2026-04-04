import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import WishesSection from "@/components/WishesSection";

describe("WishesSection", () => {
  it("renders the form with name and message fields", () => {
    render(<WishesSection />);

    expect(screen.getByLabelText("Nama")).toBeInTheDocument();
    expect(screen.getByLabelText("Pesan")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kirim Ucapan" })).toBeInTheDocument();
  });

  it('shows "Nama harus diisi" error when submitting with empty name', () => {
    render(<WishesSection />);

    // Fill message but leave name empty
    fireEvent.change(screen.getByLabelText("Pesan"), {
      target: { value: "Selamat!" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kirim Ucapan" }));

    expect(screen.getByText("Nama harus diisi")).toBeInTheDocument();
  });

  it('shows "Pesan harus diisi" error when submitting with empty message', () => {
    render(<WishesSection />);

    // Fill name but leave message empty
    fireEvent.change(screen.getByLabelText("Nama"), {
      target: { value: "Budi" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kirim Ucapan" }));

    expect(screen.getByText("Pesan harus diisi")).toBeInTheDocument();
  });

  it("wish appears in list after valid submission", () => {
    render(<WishesSection />);

    fireEvent.change(screen.getByLabelText("Nama"), {
      target: { value: "Budi" },
    });
    fireEvent.change(screen.getByLabelText("Pesan"), {
      target: { value: "Selamat menempuh hidup baru!" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kirim Ucapan" }));

    expect(screen.getByText("Budi")).toBeInTheDocument();
    expect(screen.getByText("Selamat menempuh hidup baru!")).toBeInTheDocument();
  });
});
