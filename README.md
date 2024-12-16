# vite-zappar-three-world-tracking

This example demonstrates how to use Zappar's World Tracking and User Placement with Three.js. It creates a simple scene with a model that can be placed on detected surfaces in the real world using the phone's camera.

<img src="docs/media/demo.gif" width="300" alt="Example GIF">

To try the example yourself, scan this QR code with your phone:

<img src="docs/media/qr.png" width="200" alt="Example GIF">

To run this example:

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`

## Placement Group Properties

| Setting                                     | Type                  | Description                                                                                                              |
| ------------------------------------------- | --------------------- | ------------------------------------------------------------------------------------------------------------------------ |
| `startInPlacementMode`                      | `boolean`             | Controls if the placement UI shows on launch. Defaults to `false`.                                                       |
| `placeOnPlanes`                             | `boolean`             | Controls if placement occurs on detected planes. Defaults to `true`.                                                     |
| `placeOnGround`                             | `boolean`             | Controls if placement occurs on the ground anchor, if found. Defaults to `false`.                                        |
| `visualizePlanesDuringPlacement`            | `boolean`             | Controls if detected planes are visualized during placement. Defaults to `true`.                                         |
| `showContentDuringPlacement`                | `boolean`             | Controls if the object is visible while placing. Defaults to `true`.                                                     |
| `showPlaceButton`                           | `boolean`             | Controls if the place button is shown. Defaults to `true`.                                                               |
| `showPlaceButtonIcon`                       | `boolean`             | Controls if the place button icon is shown. Defaults to `true`.                                                          |
| `placeButtonText`                           | `string`              | The text displayed on the place button. Defaults to empty string.                                                        |
| `showRestartPlacementButton`                | `boolean`             | Controls if the restart placement button is shown. Defaults to `true`.                                                   |
| `showRestartPlacementButtonIcon`            | `boolean`             | Controls if the restart placement button icon is shown. Defaults to `true`.                                              |
| `restartPlacementButtonText`                | `string`              | The text displayed on the restart placement button. Defaults to empty string.                                            |
| `longPressToMove`                           | `LongPressMode`       | Defines behavior of long press. Can be `none`, `toggle`, or `hold`. Defaults to `LongPressMode.none`.                    |
| `showLongPressInstructionOnPlace`           | `boolean`             | Controls if an instruction for moving the object appears when first placed. Defaults to `false`.                         |
| `longPressInstruction`                      | `string`              | Instruction message shown at initial placement. Defaults to "Tap and hold to move".                                      |
| `placeButtonHorizontalAlignment`            | `HorizontalAlignment` | Horizontal alignment of the place button. Can be `left`, `center`, or `right`. Defaults to `HorizontalAlignment.center`. |
| `placeButtonVerticalAlignment`              | `VerticalAlignment`   | Vertical alignment of the place button. Can be `top`, `center`, or `bottom`. Defaults to `VerticalAlignment.bottom`.     |
| `restartPlacementButtonHorizontalAlignment` | `HorizontalAlignment` | Horizontal alignment of the restart button. Can be `left`, `center`, or `right`. Defaults to `HorizontalAlignment.left`. |
| `restartPlacementButtonVerticalAlignment`   | `VerticalAlignment`   | Vertical alignment of the restart button. Can be `top`, `center`, or `bottom`. Defaults to `VerticalAlignment.bottom`.   |
| `placeUIClassList`                          | `string[]`            | Additional CSS classes for the place UI. Defaults to `["zappar-three-place-ui"]`.                                        |
