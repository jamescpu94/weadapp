export default function WindDirection(degrees: number): string {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  const normalizedDegrees = ((degrees % 360) + 360) % 360;
  const index = Math.round(normalizedDegrees / 45) % 8;

  return directions[index];
}
