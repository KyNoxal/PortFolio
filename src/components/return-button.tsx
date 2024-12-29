"use client"
import { useRouter } from 'next/navigation';

const BackButton = () => {
  const router = useRouter();

  const handleBack = () => {
    router.back();
  };

  return (
    <button onClick={handleBack} 
        className='mb-4 w-full h-fit px-3 py-2 rounded-md bg-graybutton text-gray-900 hover:bg-graybuttonhover shadow-lg hover:scale-110 hover:ease-in-out duration-200'>
      Retour
    </button>
  );
};

export default BackButton;