import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  // Connect to the database
  const body = await request.json()
  const client = await clientPromise
  const db = client.db('cliplinks')
  const collection = db.collection('links')

  // check if the shortened link already exists
  const doc = await collection.findOne({shortUrl: body.shortUrl}) 
  if (doc) {
    return Response.json({ success : false , error : true , message: 'Shortened link already exists' })
  }

  const result = await collection.insertOne({
    url:body.url,
    shortUrl:body.shortUrl,
    createdAt: new Date(),
  })

  return Response.json({ success : true , error : false , message: 'Link Generated' })
}