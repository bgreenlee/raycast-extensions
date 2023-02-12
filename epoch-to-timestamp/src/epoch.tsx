import { Clipboard, Alert, confirmAlert } from "@raycast/api";

export default async function Command() {
  var epoch = Number(await Clipboard.readText())
  if (Number.isNaN(epoch)) {
    return
  }
  var date: Date
  if (epoch >= 2**31) {
    date = new Date(epoch)
  } else {
    date = new Date(epoch * 1000)
  }
  const options: Alert.Options = {
    title: date.toString(),
    primaryAction: {
        title: "Copy to clipboard",
        onAction: () => {
            Clipboard.copy(date.toString())
        }
    }
  }
  await confirmAlert(options)
}