/* eslint-disable react/jsx-indent */
/* eslint-disable react/prop-types */
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Bar } from './style';

type BarInfoProps = {
  title: string;
  description: string;
  avatar?: string;
  alt?: string;
};

const BarInfo: React.FC<BarInfoProps> = ({
  title,
  description,
  alt,
  avatar,
}) => (
  <Bar>
    <article>
      {avatar && <img src={avatar} alt={alt} />}
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <FiChevronRight size={20} />
    </article>
  </Bar>
);

export default BarInfo;
