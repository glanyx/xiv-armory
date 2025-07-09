'use client'

import { Button, Link } from '@heroui/react'

export default function Home() {
  return (
    <div>
      <Button
        color='primary'
        as={Link}
        href='/mygear'
      >
        To Armory
      </Button>
    </div>
  );
}
