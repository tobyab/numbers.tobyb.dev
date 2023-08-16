import { getCookie } from "cookies-next";
import Link from "next/link";
import Head from "next/head";

export default function Home({ dispatch, ambulance, fire, police, country }) {
  if (!dispatch || !ambulance || !fire || !police || !country) {
    return (
      <div>
        <Head>
          <title>Emergency Numbers</title>
          <meta property="og:title" content="Emergency Numbers" />
          <meta
            name="description"
            content="What's the emergency number for the country you're in?"
          />
          <link rel="icon" type="image/x-icon" href="/favicon.ico" />
          <meta property="og:url" content="https://numbers.tobyb.dev" />
          <meta property="og:type" content="website" />
        </Head>
        <div className="grid place-items-center justify-center h-screen text-center mx-8">
          <div>
            <h1 className="text-4xl max-w-2xl lowercase">
              something&apos;s gone wrong. try reloading the page.
            </h1>
            <p className="absolute inset-x-0 bottom-8">
              a tiny utility built by{" "}
              <Link href="https://tobyb.dev" className="underline">
                toby
              </Link>
              ! ✨
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div>
      <Head>
        <title>Emergency Numbers</title>
        <meta property="og:title" content="Emergency Numbers" />
        <meta
          name="description"
          content="What's the emergency number for the country you're in?"
        />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <meta property="og:url" content="https://numbers.tobyb.dev" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="grid place-items-center justify-center h-screen text-center mx-8">
        <div>
          <h1 className="text-4xl max-w-2xl lowercase">
            you&apos;re in <b>{country.name}</b>. here are your emergency
            numbers:
          </h1>
          <div className="my-4 sm:flex text-center justify-center place-items-center sm:space-x-16 space-y-4 sm:space-y-0">
            {dispatch.all[0] === "" ? null : (
              <Data data={dispatch} emoji="📞" name="dispatch" />
            )}
            {ambulance.all[0] === "" ? null : (
              <Data data={police} emoji="🚑" name="ambulance" />
            )}
            {fire.all[0] === "" ? null : (
              <Data data={fire} emoji="🚒" name="fire" />
            )}
            {police.all[0] === "" ? null : (
              <Data data={police} emoji="🚓" name="police" />
            )}
          </div>
          <p className="absolute inset-x-0 bottom-8">
            a tiny utility built by{" "}
            <Link href="https://tobyb.dev" className="underline">
              toby
            </Link>
            ! ✨
          </p>
        </div>
      </div>
    </div>
  );
}

function Data({ data, emoji, name }) {
  return (
    <div className="grid space-y-2">
      <h1 className="font-bold text-6xl">{data.all}</h1>
      <p>
        {emoji} {name}
      </p>
    </div>
  );
}

export async function getServerSideProps({ req, res }) {
  const countryCode = getCookie("countryCode", { req, res });
  const data = await fetch(
    `https://emergencynumberapi.com/api/country/${countryCode}`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      redirect: "follow",
    },
  ).then((response) => response.json());

  if (data.data) {
    const { dispatch, ambulance, fire, police, country } = data.data;
    return {
      props: {
        dispatch,
        ambulance,
        fire,
        police,
        country,
      },
    };
  } else {
    return {};
  }
}
