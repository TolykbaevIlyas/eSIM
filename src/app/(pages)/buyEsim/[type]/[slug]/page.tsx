import Link from "next/link";

interface PageProps {
  params: {
    type: string; // например "local", "regional", "global"
    slug: string; // например "brazil"
  };
}

export default function CountryPage({ params }: PageProps) {
  const { type, slug } = params;
  const displayType = type.charAt(0).toUpperCase() + type.slice(1);
  
  return (
    <div className="container mx-auto p-4">
      <Link href="/buyEsim" className="text-blue-500 underline">
        Back
      </Link>
      {displayType === 'Global' ? 
      <h1 className="text-3xl font-bold mt-4">
        {slug.replace(/-/g, " ")}
      </h1> 
      : 
      <h1 className="text-3xl font-bold mt-4">
        Available Packages for {slug.replace(/-/g, " ")}
      </h1>}
      
      <div className="mt-6">
        {type === "local" && (
          <div>
            <p>Дизайн для Local eSIM.</p>
          </div>
        )}
        {type === "regional" && (
          <div>
            <p>Дизайн для Regional eSIM.</p>
          </div>
        )}
        {type === "global" && (
          <div>
            <p>Дизайн для Global eSIM.</p>
          </div>
        )}
      </div>
    </div>
  );
}
