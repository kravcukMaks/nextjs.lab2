export default function Home() {
  console.log('Server env var:', process.env.SECRET_KEY)

  if (typeof window !== 'undefined') {
    console.log('Client env var:', process.env.NEXT_PUBLIC_API_URL)
  }

  return (
    <div>
      <h1>Env Demo</h1>
      <p>Client env: {process.env.NEXT_PUBLIC_API_URL}</p>
    </div>
  )
}