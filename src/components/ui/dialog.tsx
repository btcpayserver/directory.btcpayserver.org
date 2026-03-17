import * as React from "react"
import * as DialogPrimitive from "@radix-ui/react-dialog"
import { X } from "lucide-react"

import { cn } from "@/lib/utils"

const Dialog = DialogPrimitive.Root

const DialogTrigger = DialogPrimitive.Trigger

const DialogPortal = DialogPrimitive.Portal

const DialogClose = DialogPrimitive.Close

const DialogOverlay = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn(
      "fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
      className
    )}
    {...props}
  />
))
DialogOverlay.displayName = DialogPrimitive.Overlay.displayName

const DialogContent = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content>
>(({ className, children, ...props }, ref) => {
  // Swipe-to-close, mobile only
  const closeRef = React.useRef<HTMLButtonElement>(null)
  const dragStartY = React.useRef<number | null>(null)
  const panelRef = React.useRef<HTMLDivElement | null>(null)

  function onDragStart(clientY: number) {
    dragStartY.current = clientY
    if (panelRef.current) panelRef.current.style.transition = "none"
  }

  function onDragMove(clientY: number) {
    if (dragStartY.current === null || !panelRef.current) return
    const delta = Math.max(0, clientY - dragStartY.current)
    panelRef.current.style.transform = `translateY(${delta}px)`
  }

  function onDragEnd(clientY: number) {
    if (dragStartY.current === null || !panelRef.current) return
    const delta = clientY - dragStartY.current
    panelRef.current.style.transition = ""
    panelRef.current.style.transform = ""
    dragStartY.current = null
    if (delta > 80) closeRef.current?.click()
  }

  function handlePointerDown(e: React.PointerEvent) {
    if (!(e.target as HTMLElement).closest("[data-drag-handle]")) return
    e.currentTarget.setPointerCapture(e.pointerId)
    onDragStart(e.clientY)
  }

  function handlePointerMove(e: React.PointerEvent) {
    if (dragStartY.current === null) return
    onDragMove(e.clientY)
  }

  function handlePointerUp(e: React.PointerEvent) {
    if (dragStartY.current === null) return
    onDragEnd(e.clientY)
  }

  return (
    <DialogPortal>
      <DialogOverlay />
      <DialogPrimitive.Content
        ref={(node) => {
          panelRef.current = node
          if (typeof ref === "function") ref(node)
          else if (ref) ref.current = node
        }}
        className={cn(
          // Mobile: bottom sheet
          "fixed bottom-0 left-0 right-0 z-50 w-full border-t border-x-0 border-b-0 bg-background shadow-2xl duration-300",
          "rounded-t-2xl",
          "data-[state=open]:animate-in data-[state=closed]:animate-out",
          "data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0",
          "data-[state=closed]:slide-out-to-bottom data-[state=open]:slide-in-from-bottom",
          // sm+: centered dialog
          "sm:bottom-auto sm:left-[50%] sm:right-auto sm:top-[50%] sm:translate-x-[-50%] sm:translate-y-[-50%]",
          "sm:border sm:rounded-2xl",
          "sm:data-[state=closed]:zoom-out-95 sm:data-[state=open]:zoom-in-95",
          "sm:data-[state=closed]:slide-out-to-bottom-[0%] sm:data-[state=open]:slide-in-from-bottom-[0%]",
          "sm:data-[state=closed]:slide-out-to-left-1/2 sm:data-[state=open]:slide-in-from-left-1/2",
          "sm:data-[state=closed]:slide-out-to-top-[48%] sm:data-[state=open]:slide-in-from-top-[48%]",
          className
        )}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
        {...props}
      >
        {/* Drag handle */}
        <div
          data-drag-handle
          className="mx-auto flex justify-center pt-3 pb-1 cursor-grab active:cursor-grabbing touch-none sm:hidden"
        >
          <div className="h-1 w-10 rounded-full bg-border pointer-events-none" />
        </div>

        {children}

        <DialogPrimitive.Close
          ref={closeRef}
          className="absolute right-4 top-4 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-muted/60 text-muted-foreground opacity-80 ring-offset-background transition-all hover:bg-muted hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"
        >
          <X className="h-4 w-4" />
          <span className="sr-only">Close</span>
        </DialogPrimitive.Close>
      </DialogPrimitive.Content>
    </DialogPortal>
  )
})
DialogContent.displayName = DialogPrimitive.Content.displayName

const DialogHeader = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={cn(
      "flex flex-col space-y-1.5",
      className
    )}
    {...props}
  />
)
DialogHeader.displayName = "DialogHeader"

const DialogTitle = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Title>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Title>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Title
    ref={ref}
    className={cn(
      "font-display text-xl font-bold leading-tight tracking-tight sm:text-2xl",
      className
    )}
    {...props}
  />
))
DialogTitle.displayName = DialogPrimitive.Title.displayName

const DialogDescription = React.forwardRef<
  React.ElementRef<typeof DialogPrimitive.Description>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Description>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Description
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
))
DialogDescription.displayName = DialogPrimitive.Description.displayName

export {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogTrigger,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
}
