
export async function GET() {
  const apkUrl = 'https://github.com/vsaintz/glyph-quest/releases/download/v1.0.1/glyph-quest.apk'

  try {
    const response = await fetch(apkUrl)
    if (!response.ok) {
      return new Response('File not found.', { status: 404 })
    }
    const fileBuffer = await response.arrayBuffer()
    const headers = new Headers()
    headers.append('Content-Disposition', 'attachment; filename="glyph-quest.apk"')
    headers.append('Content-Type', 'application/vnd.android.package-archive')
    headers.append('Content-Length', fileBuffer.byteLength.toString())

    return new Response(fileBuffer, {
      status: 200,
      headers,
    })

  } catch (error) {
    console.error(error)
    return new Response('Error fetching the file.', { status: 500 })
  }
}