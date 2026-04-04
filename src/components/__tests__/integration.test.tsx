import { render, screen, fireEvent } from "@testing-library/react";
import { describe, it, expect, vi, beforeEach, afterEach } from "vitest";
import CoverOverlay from "@/components/CoverOverlay";
import CountdownTimer from "@/components/CountdownTimer";

describe("CoverOverlay integration", () => {
  it("renders the overlay with 'Buka Undangan' button visible", () => {
    const onOpen = vi.fn();
    render(<CoverOverlay onOpen={onOpen} />);

    expect(screen.getByText("The Wedding of")).toBeInTheDocument();
    expect(screen.getByText("Gung Gus & Sonia")).toBeInTheDocument();
    expect(screen.getByText("Kepada Bpk/Ibu/Saudara/i")).toBeInTheDocument();
    expect(screen.getByText("Tamu Undangan")).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: /buka undangan/i })
    ).toBeInTheDocument();
  });

  it("calls onOpen callback when 'Buka Undangan' is clicked", () => {
    vi.useFakeTimers();
    const onOpen = vi.fn();
    render(<CoverOverlay onOpen={onOpen} />);

    fireEvent.click(screen.getByRole("button", { name: /buka undangan/i }));

    // The overlay uses a 500ms setTimeout before calling onOpen
    vi.advanceTimersByTime(500);

    expect(onOpen).toHaveBeenCalledTimes(1);
    vi.useRealTimers();
  });
});

describe("CountdownTimer with mocked date", () => {
  beforeEach(() => {
    // Mock Date.now to 2025-04-08T13:00:00+08:00 (exactly 1 day before wedding)
    vi.useFakeTimers();
    vi.setSystemTime(new Date("2025-04-08T13:00:00+08:00"));
  });

  afterEach(() => {
    vi.useRealTimers();
  });

  it("renders correct countdown values when wedding date is in the future", () => {
    render(<CountdownTimer />);

    // 1 day remaining (2025-04-08 13:00 → 2025-04-09 13:00 = exactly 1 day)
    expect(screen.getByText("1")).toBeInTheDocument();

    // Hours, minutes, seconds should all be 0
    const zeros = screen.getAllByText("0");
    expect(zeros.length).toBeGreaterThanOrEqual(3);
  });

  it("renders zero values when the wedding date has passed", () => {
    // Set time to after the wedding
    vi.setSystemTime(new Date("2025-04-10T13:00:00+08:00"));

    render(<CountdownTimer />);

    const zeros = screen.getAllByText("0");
    expect(zeros.length).toBe(4);
  });
});
