import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect } from "vitest";
import RSVPForm from "@/components/RSVPForm";

describe("RSVPForm", () => {
  it("renders the form with name input and attendance dropdown", () => {
    render(<RSVPForm />);

    expect(screen.getByLabelText("Nama")).toBeInTheDocument();
    expect(screen.getByLabelText("Kehadiran")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Kirim RSVP" })).toBeInTheDocument();
  });

  it('shows "Nama harus diisi" error when submitting with empty name', () => {
    render(<RSVPForm />);

    fireEvent.click(screen.getByRole("button", { name: "Kirim RSVP" }));

    expect(screen.getByText("Nama harus diisi")).toBeInTheDocument();
  });

  it("shows success message after valid submission", () => {
    render(<RSVPForm />);

    fireEvent.change(screen.getByLabelText("Nama"), {
      target: { value: "Budi" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Kirim RSVP" }));

    expect(
      screen.getByText("Terima kasih! RSVP Anda telah diterima.")
    ).toBeInTheDocument();
  });
});
