import { redirect } from "next/navigation"
import clientPromise from "@/lib/mongodb"

export default async function Page({ params }) {
  const url = (await params).url

  const client = await clientPromise
  const db = client.db('cliplinks')
  const collection = db.collection('links')

  const doc = await collection.findOne({shortUrl: url}) 
  if (doc) {
    redirect(doc.url)
  }
  else {
    redirect(`${process.env.NEXT_PUBLIC_HOST}`)
  }

  return <div>My Post: {url}</div>
}