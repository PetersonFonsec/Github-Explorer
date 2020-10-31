/* eslint-disable react/prop-types */
import React from 'react';
import { FiChevronRight } from 'react-icons/fi';
import { Bar } from './style';

type BarInfoProps = {
  title: string;
  description: string;
  link: string;
};

const BarInfo: React.FC<BarInfoProps> = ({ title, description, link }) => (
  <Bar>
    <a href={link}>
      <div>
        <strong>{title}</strong>
        <p>{description}</p>
      </div>
      <FiChevronRight size={20} />
    </a>
  </Bar>
);

export default BarInfo;
