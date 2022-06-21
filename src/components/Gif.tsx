interface Gif {
  gif: string;
}

const Gif = (props: Gif) => {
  return <div>{props.gif && <img src={props.gif} width="250px" />}</div>;
};

export default Gif;
