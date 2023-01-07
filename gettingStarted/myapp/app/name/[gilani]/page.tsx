export default function GiveName({ params, searchParams }: {
    params: { gilani: string },
    searchParams: { id: string },
  }) {
    
      return (
        <div>
              My name is {params.gilani}.
        </div>
      )
    }