import { Modal, Group, Button, Title, Space } from "@mantine/core";

interface ConfirmationModalProps {
  opened: boolean;
  close: () => void;
  actionText: string;
  action: () => void;
}

const ConfirmationModal: React.FC<ConfirmationModalProps> = ({
  opened,
  close,
  actionText,
  action,
}) => (
  <Modal
    opened={opened}
    onClose={close}
    centered
    withCloseButton={false}
    radius="md"
  >
    <Title order={4}>{`Are you sure you want to ${actionText}?`}</Title>
    <Space h="lg" />
    <Group justify="center" grow>
      <Button variant="light" onClick={close} color="gray">
        No
      </Button>
      <Button
        variant="filled"
        color="red"
        onClick={() => {
          action();
          close();
        }}
      >
        Yes
      </Button>
    </Group>
  </Modal>
);

export { ConfirmationModal };
