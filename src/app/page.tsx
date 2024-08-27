import PageTransition from "@/components/PageTransition";

export default function Home() {
    return (
      <PageTransition>
        <main className=" flex-1 h-screen justify-center items-center text-center  mt-50">
            <div>
                <h1 className="font-mono ">Home .</h1>
            </div>
        </main>
      </PageTransition>
        
    );
} 