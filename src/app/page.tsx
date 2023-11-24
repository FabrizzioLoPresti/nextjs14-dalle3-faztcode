import ImageForm from '@/components/image-form';

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl">
      <h1 className="text-center font-bold text-3xl">OpenAI Dall-e 3 App</h1>
      <div>
        <ImageForm />
      </div>
    </main>
  );
}
