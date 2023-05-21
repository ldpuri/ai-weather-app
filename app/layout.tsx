import './globals.css';

export const metadata = {
	title: 'Starter Template',
	description: 'Starter template for new projects',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	);
}
