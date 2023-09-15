import ComplicatedSlider from '@/components/ComplicatedSlider';
import SimpleSlider from '@/components/SimpleSlider';
import Image from 'next/image';
import ContainerBox from '../../../Continer';
import Boxes from '@/components/Boxes';
import { Divider } from '@mui/material';

export default function Home({ params }) {
  const simpleSliderContent = [
    { pic: '/images/earpod.png', name: 'electronics' },
    { pic: '/images/earpod2.png', name: 'electronics' },
    { pic: '/images/battary.png', name: 'electronics' },
    { pic: '/images/phone.png', name: 'electronics' },
    { pic: '/images/earpod.png', name: 'electronics' },
  ];

  const complicatedSliderContent = [
    { pic: '/images/sliderPic1.png' },
    { pic: '/images/sliderPic1.png' },
    { pic: '/images/sliderPic1.png' },
  ];
  const { lang } = params;

  return (
    <main>
      <ComplicatedSlider complicatedSliderContent={complicatedSliderContent} />
      <ContainerBox>
        <SimpleSlider lang={lang} simpleSliderContent={simpleSliderContent} />
        <Boxes />
      </ContainerBox>
    </main>
  );
}
