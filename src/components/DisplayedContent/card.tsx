import {Article} from '../../types/article';

interface Props {
  content: Article
}

const Card = ({content, ...rest}: Props) => {
  const {
    highlight, categories, publicationDate, preview,
    link, publicationLogo, title, source,
  } = content;

  return (
    <a
      className="w-full h-52 mt-4 inline-block p-4 rounded shadow-sm bg-white hover:bg-gray-100 cursor-pointer no-underline text-black"
      href={link}
      target="_blank"
      rel="noreferrer"
      {...rest}
    >
      <div className="flex justify-between items-center mb-2">
        <p className="font-bold underline">
          {source}
        </p>
        <p className="mr-4 text-gray-500">{publicationDate}</p>
      </div>

      <div className="mr-20">
        <strong className="text-xl font-serif max-h-28 inline-block overflow-hidden overflow-ellipsis">
          {highlight}
        </strong>
        {preview && (
        <div className="mt-1 overflow-ellipsis overflow-hidden whitespace-nowrap">
          {preview}
        </div>
        )}
      </div>

      {publicationLogo
          && (
          <img
            alt="publication logo"
            className="w-16 h-14 relative ml-auto bottom-14"
            src={publicationLogo}
          />
          )}
    </a>
  );
};

export default Card;
