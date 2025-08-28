const { convertTimeToWords } = require("./index");

describe("Time to words", () => {
  it("Handles midnight", () => {
    const timeInWords = convertTimeToWords("0:00");
    expect(timeInWords).toBe("midnight");
  });

  it("Handles midday", () => {
    const timeInWords = convertTimeToWords("12:00");
    expect(timeInWords).toBe("midday");
  });

  it("Handles exact hour", () => {
    const timeInWords = convertTimeToWords("2:00");
    expect(timeInWords).toBe("two o'clock");
  });

  it("Handles 30 - 8:30", () => {
    const timeInWords = convertTimeToWords("8:30");
    expect(timeInWords).toBe("half past eight");
  });

  it("Handles quarter - 2:15", () => {
    const timeInWords = convertTimeToWords("2:15");
    expect(timeInWords).toBe("quarter past two");
  });

  it("Handles times 20 mins - 2:20", () => {
    const timeInWords = convertTimeToWords("2:20");
    expect(timeInWords).toBe("twenty past two");
  });

  it("Handles times after 30 mins - 2:45", () => {
    const timeInWords = convertTimeToWords("2:45");
    expect(timeInWords).toBe("quarter to three");
  });

  it("Handles times after 55 mins - 2:55", () => {
    const timeInWords = convertTimeToWords("2:55");
    expect(timeInWords).toBe("five to three");
  });
});
