import type { NextApiResponse } from 'next'
import { NextRequest } from "next/server";

export default function handler(
  req: NextRequest,
  res: NextApiResponse
) {
  navigator.geolocation.getCurrentPosition(success, error, options);

  return res.status(200).json({ country });
}
