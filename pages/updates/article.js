import { useEffect, useRef, useState } from 'react';
import Head from 'next/head';
import {
  TiSocialTwitterCircular,
  TiSocialLinkedinCircular,
  TiSocialFacebookCircular,
} from 'react-icons/ti';

function article() {
  const [rootParentState, setRootParentState] = useState(false);

  const rootRef = useRef(null);

  useEffect(() => {
    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setRootParentState(true);
          } else {
            setRootParentState(false);
          }
        });
      },
      { rootMargin: rootParentState ? '100px' : '0px', threshold: 0.15 }
    );

    observer.observe(rootRef.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div>
      <Head>
        <title>Article | Atlacore</title>
        <meta name="description" content="Space themed website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col items-center justify-center py-20">
        <div className="w-full lg:w-[50%] my-20 text-center">
          <h1 className="px-4 text-2xl font-bold capitalize lg:px-0 lg:text-3xl">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit
          </h1>
        </div>
        <div className="flex flex-col items-center justify-center w-screen">
          <div className="flex justify-center w-screen lg:h-[40rem]">
            <img
              className="w-full xl:w-4/5 lg:rounded-md"
              src="https://images.unsplash.com/photo-1612892483236-52d32a0e0ac1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
            />
          </div>
          <div className="flex justify-center w-full py-2 mt-8 ">
            <p className="pr-2 text-gray-500">Written by:</p>
            <p className="font-bold">Atlacore staff</p>
          </div>
          <div className="flex flex-col justify-end md:mt-4 md:flex-row">
            <div className="flex justify-center px-1.5 md:px-8 lg:px-1.5 py-1 text-gray-500">
              <p className="mx-1">Published:</p>
              <p>{new Date().toDateString()}</p>
            </div>
            <div className="flex justify-center px-1.5 md:px-8 lg:px-1.5 py-1 text-gray-500">
              <p className="mx-1">Updated:</p>
              <p>{new Date().toDateString()}</p>
            </div>
          </div>
          <div
            ref={rootRef}
            className="flex flex-col justify-center w-screen px-4 lg:flex-row "
          >
            <div className="relative flex flex-col items-center py-2 my-3 md:my-8 lg:items-end xl:justify-start lg:w-1/6 lg:my-20">
              <aside className="flex flex-row flex-wrap items-center justify-around w-full h-20 py-8 transition duration-200 bg-white lg:mr-16 xl:mr-28 lg:flex-col lg:w-16 lg:h-72 lg:border lg:border-solid lg:border-slate-900 lg:rounded-xl">
                <TiSocialFacebookCircular className="w-1/4 text-6xl transition duration-150 cursor-pointer md:text-7xl lg:text-6xl lg:w-full hover:text-green-500" />
                <TiSocialLinkedinCircular className="w-1/4 text-6xl transition duration-150 cursor-pointer md:text-7xl lg:text-6xl lg:w-full hover:text-green-500" />
                <TiSocialTwitterCircular className="w-1/4 text-6xl transition duration-150 cursor-pointer md:text-7xl lg:text-6xl lg:w-full hover:text-green-500" />
              </aside>
            </div>
            <article className="w-full py-8 text-xl leading-8 2xl:text-2xl lg:mr-32 lg:max-w-[65%] 2xl:w-[55%]">
              The mind is the set of faculties responsible for mental phenomena.
              Often the term is also identified with the phenomena
              themselves.[2][3][4] These faculties include thought, imagination,
              memory, will and sensation. They are responsible for various
              mental phenomena, like perception, pain experience, belief,
              desire, intention and emotion. Various overlapping classifications
              of mental phenomena have been proposed. Important distinctions
              group them together according to whether they are sensory,
              propositional, intentional, conscious or occurrent. Minds were
              traditionally understood as substances but it is more common in
              the contemporary perspective to conceive them as properties or
              capacities possessed by humans and higher animals. Various
              competing definitions of the exact nature of the mind or mentality
              have been proposed. Epistemic definitions focus on the privileged
              epistemic access the subject has to these states.
              Consciousness-based approaches give primacy to the conscious mind
              and allow unconscious mental phenomena as part of the mind only to
              the extent that they stand in the right relation to the conscious
              mind. According to intentionality-based approaches, the power to
              refer to objects and to represent the world is the mark of the
              mental. For behaviorism, whether an entity has a mind only depends
              on how it behaves in response to external stimuli while
              functionalism defines mental states in terms of the causal roles
              they play. Central questions for the study of mind, like whether
              other entities besides humans have minds or how the relation
              between body and mind is to be conceived, are strongly influenced
              by the choice of one's definition.
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}

export default article;
