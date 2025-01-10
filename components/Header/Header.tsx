// app/components/Header/Header.tsx
export default function Header() {
  return (
    <header className='grid grid-cols-[80px_1fr_calc(var(--w-image)_*_var(--calculate))] grid-rows-[80px] relative z-10 border-b border-[#fff5]'>
      <figure className='flex justify-center items-center'>
        <img src='/images/logo.png' alt='' className='w-4/5' />
      </figure>
      <nav className='border-l border-[#fff5]'>
        <ul className='h-full flex justify-end items-center gap-[30px] pr-[30px]'>
          <li>
            <a href='' className='text-black font-normal'>
              Coffee
            </a>
          </li>
          <li>
            <a href='' className='text-black font-normal'>
              Menu
            </a>
          </li>
          <li>
            <a href='' className='text-black font-normal'>
              About
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
