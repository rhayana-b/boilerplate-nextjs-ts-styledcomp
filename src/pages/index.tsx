type Props = {
  title: string
}

export default function Home({ title = 'React Avançado' }: Props) {
  return <h1>Hellou {title}</h1>
}
