# vite-zappar-three-world-tracking

This example demonstrates how to use Zappar's World Tracking and User Placement with Three.js. It creates a simple scene with a model that can be placed on detected surfaces in the real world using the phone's camera.

<img src="docs/media/demo.gif" width="300" alt="Example GIF">

To try the example yourself, scan this QR code with your phone:

![QR Code](/docs/media/qrcode.png)

To run this example:

1. Install dependencies: `npm install`
2. Run the dev server: `npm run dev`

## Placement Group Properties

| Setting                                     | Type                  | Default Value                | Description                                                                        |
| ------------------------------------------- | --------------------- | ---------------------------- | ---------------------------------------------------------------------------------- |
| `startInPlacementMode`                      | `boolean`             | `false`                      | If `true`, the placement UI will start showing on launch.                          |
| `placeOnPlanes`                             | `boolean`             | `true`                       | If `true`, placement will occur on detected planes.                                |
| `placeOnGround`                             | `boolean`             | `false`                      | If `true`, placement will occur on the ground anchor, if found.                    |
| `visualizePlanesDuringPlacement`            | `boolean`             | `true`                       | If `true`, detected planes are visualized during placement.                        |
| `showContentDuringPlacement`                | `boolean`             | `true`                       | If `true`, the object will be visible while placing.                               |
| `showPlaceButton`                           | `boolean`             | `true`                       | If `true`, the place button is shown.                                              |
| `showPlaceButtonIcon`                       | `boolean`             | `true`                       | If `true`, the place button icon is shown.                                         |
| `placeButtonText`                           | `string`              | `""`                         | The text displayed on the place button.                                            |
| `showRestartPlacementButton`                | `boolean`             | `true`                       | If `true`, the restart placement button is shown.                                  |
| `showRestartPlacementButtonIcon`            | `boolean`             | `true`                       | If `true`, the restart placement button icon is shown.                             |
| `restartPlacementButtonText`                | `string`              | `""`                         | The text displayed on the restart placement button.                                |
| `longPressToMove`                           | `LongPressMode`       | `LongPressMode.none`         | Defines behavior of long press, supports `none`, `toggle`, and `hold`.             |
| `showLongPressInstructionOnPlace`           | `boolean`             | `false`                      | If `true`, show an instruction for how to move the object when place first occurs. |
| `longPressInstruction`                      | `string`              | `"Tap and hold to move"`     | Instruction message shown at the initial placement.                                |
| `placeButtonHorizontalAlignment`            | `HorizontalAlignment` | `HorizontalAlignment.center` | Horizontal alignment of the place button. `left`, `center`, `right`.               |
| `placeButtonVerticalAlignment`              | `VerticalAlignment`   | `VerticalAlignment.bottom`   | Vertical alignment of the place button. `top`, `center`, `bottom`.                 |
| `restartPlacementButtonHorizontalAlignment` | `HorizontalAlignment` | `HorizontalAlignment.left`   | Horizontal alignment of the restart button. `left`, `center`, `right`.             |
| `restartPlacementButtonVerticalAlignment`   | `VerticalAlignment`   | `VerticalAlignment.bottom`   | Vertical alignment of the restart button. `top`, `center`, `bottom`.               |
| `placeUIClassList`                          | `string[]`            | `["zappar-three-place-ui"]`  | Additional CSS classes for the place UI.                                           |
