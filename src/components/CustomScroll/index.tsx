import {Scrollbars} from 'react-custom-scrollbars';

interface Props {
  style?: any;
  children: any;
}

const CustomScroll: React.FC<Props> = ({...props}) => {
  const renderThumb = ({style, ...scrollProps}: any) => {
    const thumbStyle = {
      backgroundColor: '#DCDFDF',
      width: '10px',
    };
    return <div style={{...style, ...thumbStyle}} {...scrollProps} />;
  };

  return (
    <Scrollbars
      autoHide
      renderThumbHorizontal={renderThumb}
      renderThumbVertical={renderThumb}
      {...props}
    />
  );
};

export default CustomScroll;
