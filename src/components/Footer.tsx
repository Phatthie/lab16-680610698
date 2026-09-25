interface FooterProps  {
  firstName: string;
  lastName: string;
  studentId: string | number;
};

export default function Footer({ firstName, lastName, studentId }: FooterProps) {
  return (
    <footer className="border-t p-4 text-center text-xs text-muted-foreground">
        จัดทำโดย {firstName} {lastName} - {studentId}
    </footer>
  );
}