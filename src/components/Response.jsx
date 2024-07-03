import '../styles/Response.css'

export function Response({response}) {
  if (!response) return null;

  const formattedResponse = JSON.stringify(response, null, 2);

  return (
    <pre className="response-text-area">
      {formattedResponse.split('\n').map((line, index) => (
        <div key={index}>
          <span className="line-number">{index + 1}</span>
          {line}
        </div>
      ))}
    </pre>
  )
}