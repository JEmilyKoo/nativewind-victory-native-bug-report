import { Stack } from 'expo-router';

import { Container } from '~/components/Container';
import { ScreenContent } from '~/components/ScreenContent';
import Theme from '~/components/Theme';

export default function Home() {
  return (
    <>
      <Stack.Screen options={{ title: 'Home' }} />
      <Container>
        <Theme>
          <ScreenContent />
        </Theme>
      </Container>
    </>
  );
}
