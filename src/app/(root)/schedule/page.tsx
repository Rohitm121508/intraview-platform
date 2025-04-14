"use client"

import LoaderUI from "@/components/LoaderUI"
import { userUserRole } from "@/hooks/useUserRole"
import { useRouter } from "next/navigation"
import InterviewScheduleUI from "./InterviewScheduleUI"

function SchedulePage() {
  const router = useRouter()
  const {isInterviewer,isLoading} = userUserRole()

  if(isLoading) return <LoaderUI/>
  if(!isInterviewer) router.push("/")
  return (
    <InterviewScheduleUI/>
  )
}

export default SchedulePage