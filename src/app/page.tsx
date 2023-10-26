import "./styles.css";


export default function Home() {
  return (
    <main className="h-screen ">
      <div className="relative">
        <div className="absolute -z-10">
          <img
            src={
              "https://ucarecdn.com/2d27e1be-861b-4ad0-be61-2748a2346369/-/preview/500x500/-/quality/smart/-/format/auto/"
            }
            alt=""
            className="w-screen h-screen"
          />
        </div>
      </div>

      <header
        className="
      text-slate-50 
      flex
      justify-between
      items-center
      py-5
      px-14
      "
      >
        <h1 className=" text-2xl font-semibold tracking-wider">
          <span className="text-lime-500 text-3xl">*</span>NUMENTA
        </h1>

        <ul className="flex gap-10">
          <li>Pricing</li>
          <li>FAQ</li>
        </ul>

        <div className="flex gap-10">
          <button>Log in</button>
          <button className="bg-transparent px-6 py-2 rounded-3xl border focus-within:bg-blue-900 hover:bg-blue-900 active:border-zinc-800">
            Generate
          </button>
        </div>
      </header>

      <section className="text-white  mt-10 text-center">
        <h1 className="text-9xl font-semibold">
          AI Image Generation <br /> in One <span>Click</span>
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Molestias,
          sint.
        </p>
      </section>

      <section className="flex gap-5 mt-10">

        <div className="grid px-2 gap-2">
          <img src="https://ucarecdn.com/158f774e-c25a-4bba-8ecb-e5279c26a7cc/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
          <img src="https://ucarecdn.com/e94b198e-d830-4415-846a-da4798d2effb/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
          <img src="https://ucarecdn.com/648ebdfb-0a4a-4a50-a43a-61d8171c72d8/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
        </div>

        <img className="w-1/3 rounded-lg" src="https://ucarecdn.com/e29e069b-1ea4-40f4-ae69-edf6486299ba/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />

        <div className="grid-2 px-2 gap-2">
          <img src="https://ucarecdn.com/218c7ab2-cbbc-4abe-afdd-34738cd8c4e1/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
          <img src="https://ucarecdn.com/1dc90aa9-5e6a-4a6e-b0be-c9262eef219d/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
          <img src="https://ucarecdn.com/fac379cc-427a-4ff5-9fba-7444a25c2076/-/preview/1000x1000/-/quality/smart/-/format/auto/" alt="" />
        </div>

      </section>
    </main>
  );
}
