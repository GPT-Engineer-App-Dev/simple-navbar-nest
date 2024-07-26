import { Button } from "@/components/ui/button";

const Index = () => {
  return (
    <div className="min-h-screen bg-red-500">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-6 text-white">Welcome to Our Website</h1>
        <p className="text-lg mb-4 text-white">
          This is a simple layout with a navbar and a red background. You can add more content and features as needed.
        </p>
        <Button className="bg-white text-red-500 hover:bg-red-100">Get Started</Button>
      </div>
    </div>
  );
};

export default Index;
