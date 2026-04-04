import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach } from "vitest";
import GiftSection from "@/components/GiftSection";
import { BANK_INFO } from "@/lib/constants";

describe("GiftSection", () => {
  beforeEach(() => {
    Object.assign(navigator, {
      clipboard: {
        writeText: vi.fn().mockResolvedValue(undefined),
      },
    });
  });

  it("renders bank info (bank name, account number, account holder)", () => {
    render(<GiftSection />);

    expect(screen.getByText(BANK_INFO.bankName)).toBeInTheDocument();
    expect(screen.getByText(BANK_INFO.accountNumber)).toBeInTheDocument();
    expect(
      screen.getByText(`a.n. ${BANK_INFO.accountHolder}`)
    ).toBeInTheDocument();
  });

  it("copy button calls navigator.clipboard.writeText with the account number", async () => {
    render(<GiftSection />);

    fireEvent.click(
      screen.getByRole("button", { name: "Copy account number" })
    );

    await waitFor(() => {
      expect(navigator.clipboard.writeText).toHaveBeenCalledWith(
        BANK_INFO.accountNumber
      );
    });
  });

  it('shows "Tersalin!" confirmation text after clicking copy', async () => {
    render(<GiftSection />);

    fireEvent.click(
      screen.getByRole("button", { name: "Copy account number" })
    );

    await waitFor(() => {
      expect(screen.getByText("Tersalin!")).toBeInTheDocument();
    });
  });
});
