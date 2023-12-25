import { Hotel } from "../types/Hotel";

export const fetchHotels = async (): Promise<Hotel[]> => {
  try {
    const response = await fetch(
      "https://61c3e5d2f1af4a0017d99115.mockapi.io/hotels/en"
    );

    if (!response.ok) {
      throw new Error("Failed to fetch hotels");
    }

    const data: Hotel[] = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching hotels:", error);
    return [];
  }
};
