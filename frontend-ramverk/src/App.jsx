import { createSignal, For, Show } from 'solid-js';

function Kort(props) {
  return (
    <article>
      <img
        src={props.bild}
        alt={props.titel}
        style={{ width: '120px', height: '170px', 'object-fit': 'cover' }}
      />
      <h3>{props.titel}</h3>
      <p>Typ: {props.typ}</p>
    </article>
  );
}

export default function App() {
  const [sokord, setSokord] = createSignal('');

  const katalog = [
    {
      titel: 'Naruto',
      typ: 'Anime',
      bild: 'https://m.media-amazon.com/images/I/91RpwagB7uL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      titel: 'Dragon Ball',
      typ: 'Manga',
      bild: 'https://m.media-amazon.com/images/I/71DT4kEyLnL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      titel: 'One Piece',
      typ: 'Anime',
      bild: 'https://m.media-amazon.com/images/I/91v815HgV-L._AC_UF1000,1000_QL80_.jpg',
    },
    {
      titel: 'Attack on Titan',
      typ: 'Manga',
      bild: 'https://m.media-amazon.com/images/I/81qPzeEO5IL._AC_UF1000,1000_QL80_.jpg',
    },
    {
      titel: 'Death Note',
      typ: 'Anime',
      bild: 'https://m.media-amazon.com/images/I/416ucrdKb0L._AC_UF894,1000_QL80_.jpg',
    },
    {
      titel: 'Demon Slayer',
      typ: 'Manga',
      bild: 'https://m.media-amazon.com/images/I/916mTVw0teL._AC_UF1000,1000_QL80_.jpg',
    },
  ];

  const filtreradKatalog = () =>
    katalog.filter((item) =>
      item.titel.toLowerCase().includes(sokord().toLowerCase())
    );

  return (
    <div>
      <header>
        <h1>Crunchyroll</h1>
        <input
          type="text"
          placeholder="Sök..."
          value={sokord()}
          onInput={(e) => setSokord(e.target.value)}
          style={{ 'margin-bottom': '20px' }}
        />
      </header>

      <main>
        <section>
          <For each={filtreradKatalog()}>
            {(item) => (
              <Kort titel={item.titel} typ={item.typ} bild={item.bild} />
            )}
          </For>
        </section>

        <Show when={filtreradKatalog().length === 0}>
          <p>Inget hittades.</p>
        </Show>
      </main>
    </div>
  );
}