"use client";

import { ReactNode, useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "./ui/button";
import Image from "next/image";
import { cn } from "@/lib/utils";

interface MeetingModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  className?: string;
  buttonText?: string;
  handleClick?: () => void;
  children?: ReactNode;
  image?: string;
  buttonIcon?: string;
}

const MeetingModal = ({
  isOpen,
  onClose,
  title,
  className,
  buttonText,
  handleClick,
  image,
  buttonIcon,
  children,
}: MeetingModalProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px] flex w-full max-w-[520px] flex-col gap-6 border-none bg-dark-1 px-6 py-9 text-white ">
        <div className="flex flex-col gap-6">
          {image && (
            <div className="justify-center">
              <Image src={image} alt="meeting icon" width={72} height={72} />
            </div>
          )}
          <h1 className={cn("text-3xl font-bold leading-[42px]", className)}>
            {title}
          </h1>
          {children}
          <Button
            className="bg-blue-1 focus-visible:ring-0 focus-visible:ring-offset-0"
            onClick={handleClick}
          >
            {buttonIcon && (
              <Image
                src={buttonIcon}
                alt="button icon"
                width={13}
                height={13}
              />
            )}
            {buttonText || "Schedule Meeting"}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default MeetingModal;
