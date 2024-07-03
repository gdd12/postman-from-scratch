export function Response({response}) {
  response = JSON.stringify(response)
  return (
    <>
    {response}
    </>
  )
}