
import { Alert, AlertDescription, AlertTitle } from "../src/components/ui/alert"
import { Terminal } from "lucide-react"

export default function App() {
	return <Alert variant="default">
	<Terminal />
	<AlertTitle>Heads up!</AlertTitle>
	<AlertDescription>
	  You can add components and dependencies to your app using the cli.
	</AlertDescription>
  </Alert>
}
