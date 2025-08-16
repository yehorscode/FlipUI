import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Calendar } from "@/components/ui/calendar";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { CheckCircle2Icon } from "lucide-react";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
export default function Home() {
  return (
    <div className="p-20">
      <div className="p-0">
        <h1 className="text-5xl bg-black dark:bg-flip-orange dark:text-flip-black text-flip-orange px-2 py-1">
          Tailwind theme that actually looks like Flipper UI
        </h1>
        <span>For the most part, mostly, if you squint</span>
        <div className="flex flex-col w-50 gap-1 mt-3">
          <Button
            className="p-6 text-2xl"
            onClick={() => {
              window.location.href = "/components";
            }}
          >
            See components
          </Button>
          <Button
            className="p-6 text-2xl"
            onClick={() => {
              window.location.href = "/colors";
            }}
          >
            See colors
          </Button>
          <Button className="p-6 text-2xl" variant={"outline"}>
            Seek help
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <h1 className="text-3xl">
          Beautifully re-styled components from{" "}
          <a
            href="https://ui.shadcn.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:bg-flip-black hover:text-flip-orange dark:hover:bg-flip-orange dark:hover:text-flip-black"
          >
            <u>Shadcn/ui</u>
          </a>{" "}
          now in Flippah style
        </h1>
        <span>Made with love and tears</span>

        <div className="mt-8 overflow-hidden relative">
          <div className="flex animate-scroll gap-8 whitespace-nowrap">
            <div className="flex gap-8 items-center shrink-0">
              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border shadow-sm"
                  captionLayout="dropdown"
                />
                <span className="text-sm text-muted-foreground">Calendar</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Alert className="w-80">
                  <CheckCircle2Icon />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                </Alert>
                <span className="text-sm text-muted-foreground">Alert</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex gap-2">
                  <Button>Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                </div>
                <span className="text-sm text-muted-foreground">Buttons</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex gap-2">
                  <Badge>Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <span className="text-sm text-muted-foreground">Badges</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>FlipUI Component</CardTitle>
                    <CardDescription>
                      A beautifully designed card component.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Cool card</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Explore</Button>
                  </CardFooter>
                </Card>
                <span className="text-sm text-muted-foreground">Card</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms" defaultChecked />
                    <label htmlFor="terms" className="text-sm">
                      Accept terms
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter" />
                    <label htmlFor="newsletter" className="text-sm">
                      Subscribe
                    </label>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Checkbox</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <span className="text-sm text-muted-foreground">
                  Pagination
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="r1" />
                    <Label htmlFor="r1">Default</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2" />
                    <Label htmlFor="r2">Comfortable</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3" />
                    <Label htmlFor="r3">Compact</Label>
                  </div>
                </RadioGroup>
                <span className="text-sm text-muted-foreground">
                  Radio Group
                </span>
              </div>
            </div>

            <div className="flex gap-8 items-center shrink-0">
              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Calendar
                  mode="single"
                  selected={new Date()}
                  className="rounded-md border shadow-sm"
                  captionLayout="dropdown"
                />
                <span className="text-sm text-muted-foreground">Calendar</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Alert className="w-80">
                  <CheckCircle2Icon />
                  <AlertTitle>Success! Your changes have been saved</AlertTitle>
                  <AlertDescription>
                    This is an alert with icon, title and description.
                  </AlertDescription>
                </Alert>
                <span className="text-sm text-muted-foreground">Alert</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex gap-2">
                  <Button>Default</Button>
                  <Button variant="destructive">Destructive</Button>
                  <Button variant="outline">Outline</Button>
                </div>
                <span className="text-sm text-muted-foreground">Buttons</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex gap-2">
                  <Badge>Badge</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                </div>
                <span className="text-sm text-muted-foreground">Badges</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Card className="w-[350px]">
                  <CardHeader>
                    <CardTitle>FlipUI Component</CardTitle>
                    <CardDescription>
                      A beautifully designed card component.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p>Cool card</p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline">Explore</Button>
                  </CardFooter>
                </Card>
                <span className="text-sm text-muted-foreground">Card</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center space-x-2">
                    <Checkbox id="terms2" defaultChecked />
                    <label htmlFor="terms2" className="text-sm">
                      Accept terms
                    </label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Checkbox id="newsletter2" />
                    <label htmlFor="newsletter2" className="text-sm">
                      Subscribe
                    </label>
                  </div>
                </div>
                <span className="text-sm text-muted-foreground">Checkbox</span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <Pagination>
                  <PaginationContent>
                    <PaginationItem>
                      <PaginationPrevious href="#" />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">1</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#" isActive>
                        2
                      </PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationLink href="#">3</PaginationLink>
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationEllipsis />
                    </PaginationItem>
                    <PaginationItem>
                      <PaginationNext href="#" />
                    </PaginationItem>
                  </PaginationContent>
                </Pagination>
                <span className="text-sm text-muted-foreground">
                  Pagination
                </span>
              </div>

              <div className="flex flex-col items-center gap-2 min-w-fit">
                <RadioGroup defaultValue="comfortable">
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="default" id="r1-dup" />
                    <Label htmlFor="r1-dup">Default</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="comfortable" id="r2-dup" />
                    <Label htmlFor="r2-dup">Comfortable</Label>
                  </div>
                  <div className="flex items-center gap-3">
                    <RadioGroupItem value="compact" id="r3-dup" />
                    <Label htmlFor="r3-dup">Compact</Label>
                  </div>
                </RadioGroup>
                <span className="text-sm text-muted-foreground">
                  Radio Group
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
