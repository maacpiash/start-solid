import { json } from 'solid-start'

export async function GET() {
  return json({ message: 'Hello, world!' })
}
