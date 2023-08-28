import React from 'react';

import Button from './Button';

import type { Meta, StoryObj } from '@storybook/react';

type Story = StoryObj<typeof Button>;

export const Default: Story = {
  render: () => <Button>Default</Button>,
};

export default {
  title: 'Button',
  component: Button,
} as Meta<typeof Button>;
