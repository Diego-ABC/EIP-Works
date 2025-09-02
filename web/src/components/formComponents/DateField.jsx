// import { useDateField, useDateSegment } from "react-aria";
// import { useDateFieldState } from "react-stately";
// import { parseDate } from "@internationalized/date";
// import { createCalendar } from "@internationalized/date";
// import { useRef } from "react";

// export default function DatePicker({ value, onChange }) {
//   let state = useDateFieldState({
//     value: value ? parseDate(value) : null,
//     // onChange,
//     granularity: "day",
//     locale: "en-US", // force mm/dd/yyyy
//     createCalendar,
//   });

//   let ref = useRef();
//   let { fieldProps } = useDateField({}, state, ref);

//   return (
//     <div
//       {...fieldProps}
//       ref={ref}
//       className="flex items-center border rounded-lg px-2 py-1 bg-base-100"
//     >
//       {state.segments.map((segment, i) => (
//         <DateSegment key={i} segment={segment} state={state} />
//       ))}
//     </div>
//   );
// }

// function DateSegment({ segment, state }) {
//   let ref = useRef();
//   let { segmentProps } = useDateSegment(segment, state, ref);

//   return (
//     <div
//       {...segmentProps}
//       ref={ref}
//       className="px-0.5 focus:bg-primary/20 rounded cursor-text "
//     >
//       {segment.text}
//     </div>
//   );
// }

import {
  Button,
  Calendar,
  CalendarCell,
  CalendarGrid,
  DateInput,
  DatePicker,
  DateSegment,
  Dialog,
  Group,
  Heading,
  Label,
  Popover,
} from "react-aria-components";
import {
  CaretLeftIcon,
  CaretRightIcon,
  CalendarIcon,
} from "@phosphor-icons/react";
import textFieldStyle from "./textFieldStyle";
import classMerge from "@/lib/utils/stylings/classMerge";

export default function DateField({ label, name, className }) {
  return (
    <DatePicker name={name} aria-label={label}>
      {/* <Label>Date</Label> */}
      <Group
        className={classMerge(
          textFieldStyle,
          className,
          "floating-label w-full"
        )}
      >
        {label && <span className="">{label}</span>}
        <DateInput className="grow">
          {(segment) => (
            <DateSegment
              className="outline-none px-0.5 focus:bg-blue-500 dark:focus:bg-blue-300 focus:text-base-100"
              segment={segment}
            />
          )}
        </DateInput>
        <Button className="cursor-pointer group p-1">
          <CalendarIcon
            weight="fill"
            size={20}
            className="group-hover:fill-amber-500 transition-colors"
          />
        </Button>
      </Group>

      <Popover className="border-2 border-base-content bg-base-100">
        <Dialog>
          <Calendar className="px-5 py-2.5">
            <header className="flex flex-row justify-between items-center font-bold">
              <Button className="btn btn-sm btn-ghost" slot="previous">
                <CaretLeftIcon size={20} weight="fill" />
              </Button>
              <Heading />
              <Button className="btn btn-sm btn-ghost" slot="next">
                <CaretRightIcon size={20} weight="fill" />
              </Button>
            </header>

            <CalendarGrid>
              {(date) => (
                <CalendarCell
                  className="w-8 font-medium leading-8 p-0 text-center \
                  hover:cursor-pointer hover:bg-base-content \
                  hover:text-base-100 [&[data-outside-month]]:hidden \
                  [&[data-selected]]:bg-accent [&[data-selected]]:text-accent-content\
                  active:bg-accent-content"
                  date={date}
                />
              )}
            </CalendarGrid>
          </Calendar>
        </Dialog>
      </Popover>
    </DatePicker>
  );
}
