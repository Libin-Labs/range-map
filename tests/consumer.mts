import * as api from '@lp-labs/range-map';
import { mapRange } from '@lp-labs/range-map';
console.log(mapRange(5, 0, 10, 0, 100));
// @ts-expect-error invalid argument must be rejected by declarations
api.mapRange(5, 'zero', 10, 0, 1);
