const iconlin =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694937772/chlin1_pnzulg.png';
const iconig =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694937883/instagramicon_nmr1or.png ';
const icontwi =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694937772/twi_voburt.png';
const icongit =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694937772/git1_thbrhc.png';
const iconmessage =
  'https://res.cloudinary.com/dutvrzezk/image/upload/v1694940758/meesaicon.png1_mf7uhd.png';

const SocialIcons = () => {
  return (
    <div className="flex mt-9 justify-center lg:absolute lg:top-0 lg:left-0 xl:fixed xl:top-[100px]  xl:left-0 lg:ml-16 xl:ml-  ">
      <div className="flex  xl:flex-col xl:flex lg:flex-col lg:flex relative items-center  gap-9 ">
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/temitech001/"
        >
          <img
            className="w-[40px] h-[40px]"
            src={iconlin}
            alt=""
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/Temitech001"
        >
          <img
            className="w-[26px] h-[26px] "
            src={icongit}
            alt=""
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href=""
        >
          {' '}
          <img
            className="w-[30px] h-[30px] "
            src={iconmessage}
            alt=""
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://twitter.com/Temini001"
        >
          <img
            className="w-[28px] h-[28px]"
            src={icontwi}
            alt=""
          />
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://instagram.com/viralvibestv?igshid=MzMyNGUyNmU2YQ=="
        >
          <img
            className="w-26px] h-[26px]"
            src={iconig}
            alt=""
          />
        </a>
      </div>
    </div>
  );
};

export default SocialIcons;
