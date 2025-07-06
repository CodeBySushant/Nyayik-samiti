"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { CalendarIcon, Plus, Minus } from "lucide-react"
import { Calendar } from "@/components/ui/calendar"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { format } from "date-fns"
import { cn } from "@/lib/utils"

interface Party {
  firstName: string
  middleName: string
  lastName: string
  dateOfBirth: Date | undefined
  gender: string
  mobileNumber: string
  citizenshipNumber: string
  grandfatherName: string
  fatherName: string
  permanentProvince: string
  permanentDistrict: string
  permanentPalika: string
  permanentWard: string
  isCurrentSameAsPermanent: boolean
  currentProvince: string
  currentDistrict: string
  currentPalika: string
  currentWard: string
}

export default function ComplaintForm() {
  const [firstParties, setFirstParties] = useState<Party[]>([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: undefined,
      gender: "",
      mobileNumber: "",
      citizenshipNumber: "",
      grandfatherName: "",
      fatherName: "",
      permanentProvince: "",
      permanentDistrict: "",
      permanentPalika: "",
      permanentWard: "",
      isCurrentSameAsPermanent: false,
      currentProvince: "",
      currentDistrict: "",
      currentPalika: "",
      currentWard: "",
    },
  ])

  const [secondParties, setSecondParties] = useState<Party[]>([
    {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: undefined,
      gender: "",
      mobileNumber: "",
      citizenshipNumber: "",
      grandfatherName: "",
      fatherName: "",
      permanentProvince: "",
      permanentDistrict: "",
      permanentPalika: "",
      permanentWard: "",
      isCurrentSameAsPermanent: false,
      currentProvince: "",
      currentDistrict: "",
      currentPalika: "",
      currentWard: "",
    },
  ])

  const [caseDetails, setCaseDetails] = useState({
    caseSubject: "",
    caseType: "",
    caseStage: "",
    registrationDate: undefined as Date | undefined,
    fileNumber: "",
    fileDate: undefined as Date | undefined,
    caseNumber: "",
    registrationFee: "",
    disputeTopic: "",
    caseDescription: "",
    witnesses: "",
    courtType: "",
    courtName: "",
    judgePosition: "",
    judgeName: "",
    remarks: "",
  })

  const provinces = [
    "प्रदेश नं. १",
    "मधेस प्रदेश",
    "बागमती प्रदेश",
    "गण्डकी प्रदेश",
    "लुम्बिनी प्रदेश",
    "कर्णाली प्रदेश",
    "सुदूरपश्चिम प्रदेश",
  ]

  const genders = ["पुरुष", "महिला", "अन्य"]
  const caseTypes = ["दिवानी", "फौजदारी", "प्रशासनिक"]
  const caseStages = ["प्रारम्भिक", "सुनुवाई", "निर्णय", "समाप्त"]

  const addParty = (type: "first" | "second") => {
    const newParty: Party = {
      firstName: "",
      middleName: "",
      lastName: "",
      dateOfBirth: undefined,
      gender: "",
      mobileNumber: "",
      citizenshipNumber: "",
      grandfatherName: "",
      fatherName: "",
      permanentProvince: "",
      permanentDistrict: "",
      permanentPalika: "",
      permanentWard: "",
      isCurrentSameAsPermanent: false,
      currentProvince: "",
      currentDistrict: "",
      currentPalika: "",
      currentWard: "",
    }

    if (type === "first") {
      setFirstParties([...firstParties, newParty])
    } else {
      setSecondParties([...secondParties, newParty])
    }
  }

  const removeParty = (type: "first" | "second", index: number) => {
    if (type === "first" && firstParties.length > 1) {
      setFirstParties(firstParties.filter((_, i) => i !== index))
    } else if (type === "second" && secondParties.length > 1) {
      setSecondParties(secondParties.filter((_, i) => i !== index))
    }
  }

  const updateParty = (type: "first" | "second", index: number, field: keyof Party, value: any) => {
    if (type === "first") {
      const updated = [...firstParties]
      updated[index] = { ...updated[index], [field]: value }
      setFirstParties(updated)
    } else {
      const updated = [...secondParties]
      updated[index] = { ...updated[index], [field]: value }
      setSecondParties(updated)
    }
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("Case Details:", caseDetails)
    console.log("First Parties:", firstParties)
    console.log("Second Parties:", secondParties)
    alert("उजुरी सफलतापूर्वक दर्ता भयो!")
  }

  const renderPartyForm = (party: Party, index: number, type: "first" | "second") => (
    <Card key={index} className="mb-6">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-[#003893]">
          {type === "first" ? "पहिलो पक्ष" : "दोस्रो पक्ष"} {index + 1}
        </CardTitle>
        {((type === "first" && firstParties.length > 1) || (type === "second" && secondParties.length > 1)) && (
          <Button
            type="button"
            variant="outline"
            size="sm"
            onClick={() => removeParty(type, index)}
            className="text-red-600 border-red-600 hover:bg-red-50"
          >
            <Minus className="h-4 w-4" />
          </Button>
        )}
      </CardHeader>
      <CardContent className="space-y-4">
        {/* Personal Information */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor={`${type}-firstName-${index}`}>पहिलो नाम *</Label>
            <Input
              id={`${type}-firstName-${index}`}
              value={party.firstName}
              onChange={(e) => updateParty(type, index, "firstName", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={`${type}-middleName-${index}`}>बिचको नाम</Label>
            <Input
              id={`${type}-middleName-${index}`}
              value={party.middleName}
              onChange={(e) => updateParty(type, index, "middleName", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor={`${type}-lastName-${index}`}>थर *</Label>
            <Input
              id={`${type}-lastName-${index}`}
              value={party.lastName}
              onChange={(e) => updateParty(type, index, "lastName", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label>जन्म मिति *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button
                  variant="outline"
                  className={cn(
                    "w-full justify-start text-left font-normal",
                    !party.dateOfBirth && "text-muted-foreground",
                  )}
                >
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {party.dateOfBirth ? format(party.dateOfBirth, "PPP") : "मिति छान्नुहोस्"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0">
                <Calendar
                  mode="single"
                  selected={party.dateOfBirth}
                  onSelect={(date) => updateParty(type, index, "dateOfBirth", date)}
                  initialFocus
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label htmlFor={`${type}-gender-${index}`}>लिङ्ग *</Label>
            <Select value={party.gender} onValueChange={(value) => updateParty(type, index, "gender", value)}>
              <SelectTrigger>
                <SelectValue placeholder="लिङ्ग छान्नुहोस्" />
              </SelectTrigger>
              <SelectContent>
                {genders.map((gender) => (
                  <SelectItem key={gender} value={gender}>
                    {gender}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <Label htmlFor={`${type}-mobile-${index}`}>मोबाइल नम्बर *</Label>
            <Input
              id={`${type}-mobile-${index}`}
              value={party.mobileNumber}
              onChange={(e) => updateParty(type, index, "mobileNumber", e.target.value)}
              required
            />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <Label htmlFor={`${type}-citizenship-${index}`}>नागरिकता नम्बर *</Label>
            <Input
              id={`${type}-citizenship-${index}`}
              value={party.citizenshipNumber}
              onChange={(e) => updateParty(type, index, "citizenshipNumber", e.target.value)}
              required
            />
          </div>
          <div>
            <Label htmlFor={`${type}-grandfather-${index}`}>हजुरबुबाको नाम</Label>
            <Input
              id={`${type}-grandfather-${index}`}
              value={party.grandfatherName}
              onChange={(e) => updateParty(type, index, "grandfatherName", e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor={`${type}-father-${index}`}>बुबाको नाम *</Label>
            <Input
              id={`${type}-father-${index}`}
              value={party.fatherName}
              onChange={(e) => updateParty(type, index, "fatherName", e.target.value)}
              required
            />
          </div>
        </div>

        {/* Permanent Address */}
        <div className="border-t pt-4">
          <h4 className="font-semibold text-[#003893] mb-3">स्थायी ठेगाना</h4>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <div>
              <Label htmlFor={`${type}-perm-province-${index}`}>प्रदेश *</Label>
              <Select
                value={party.permanentProvince}
                onValueChange={(value) => updateParty(type, index, "permanentProvince", value)}
              >
                <SelectTrigger>
                  <SelectValue placeholder="प्रदेश छान्नुहोस्" />
                </SelectTrigger>
                <SelectContent>
                  {provinces.map((province) => (
                    <SelectItem key={province} value={province}>
                      {province}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div>
              <Label htmlFor={`${type}-perm-district-${index}`}>जिल्ला *</Label>
              <Input
                id={`${type}-perm-district-${index}`}
                value={party.permanentDistrict}
                onChange={(e) => updateParty(type, index, "permanentDistrict", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor={`${type}-perm-palika-${index}`}>पालिका *</Label>
              <Input
                id={`${type}-perm-palika-${index}`}
                value={party.permanentPalika}
                onChange={(e) => updateParty(type, index, "permanentPalika", e.target.value)}
                required
              />
            </div>
            <div>
              <Label htmlFor={`${type}-perm-ward-${index}`}>वडा नं. *</Label>
              <Input
                id={`${type}-perm-ward-${index}`}
                value={party.permanentWard}
                onChange={(e) => updateParty(type, index, "permanentWard", e.target.value)}
                required
              />
            </div>
          </div>
        </div>

        {/* Current Address */}
        <div className="border-t pt-4">
          <div className="flex items-center space-x-2 mb-3">
            <Checkbox
              id={`${type}-same-address-${index}`}
              checked={party.isCurrentSameAsPermanent}
              onCheckedChange={(checked) => updateParty(type, index, "isCurrentSameAsPermanent", checked)}
            />
            <Label htmlFor={`${type}-same-address-${index}`}>हालको ठेगाना स्थायी ठेगाना जस्तै छ</Label>
          </div>

          {!party.isCurrentSameAsPermanent && (
            <>
              <h4 className="font-semibold text-[#003893] mb-3">हालको ठेगाना</h4>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                <div>
                  <Label htmlFor={`${type}-curr-province-${index}`}>प्रदेश</Label>
                  <Select
                    value={party.currentProvince}
                    onValueChange={(value) => updateParty(type, index, "currentProvince", value)}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="प्रदेश छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {provinces.map((province) => (
                        <SelectItem key={province} value={province}>
                          {province}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor={`${type}-curr-district-${index}`}>जिल्ला</Label>
                  <Input
                    id={`${type}-curr-district-${index}`}
                    value={party.currentDistrict}
                    onChange={(e) => updateParty(type, index, "currentDistrict", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`${type}-curr-palika-${index}`}>पालिका</Label>
                  <Input
                    id={`${type}-curr-palika-${index}`}
                    value={party.currentPalika}
                    onChange={(e) => updateParty(type, index, "currentPalika", e.target.value)}
                  />
                </div>
                <div>
                  <Label htmlFor={`${type}-curr-ward-${index}`}>वडा नं.</Label>
                  <Input
                    id={`${type}-curr-ward-${index}`}
                    value={party.currentWard}
                    onChange={(e) => updateParty(type, index, "currentWard", e.target.value)}
                  />
                </div>
              </div>
            </>
          )}
        </div>
      </CardContent>
    </Card>
  )

  return (
    <section id="complaint-form" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-[#003893] mb-4">उजुरी दर्ता फारम</h2>
          <p className="text-gray-600 text-lg">कृपया सबै आवश्यक जानकारी भर्नुहोस्</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-8">
          {/* Case Details */}
          <Card>
            <CardHeader>
              <CardTitle className="text-xl text-[#003893]">मुद्दाको विवरण</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="caseSubject">मुद्दाको विषय *</Label>
                  <Input
                    id="caseSubject"
                    value={caseDetails.caseSubject}
                    onChange={(e) => setCaseDetails({ ...caseDetails, caseSubject: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="caseType">मुद्दाको प्रकार *</Label>
                  <Select
                    value={caseDetails.caseType}
                    onValueChange={(value) => setCaseDetails({ ...caseDetails, caseType: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="प्रकार छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseTypes.map((type) => (
                        <SelectItem key={type} value={type}>
                          {type}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div>
                  <Label htmlFor="caseStage">मुद्दाको चरण</Label>
                  <Select
                    value={caseDetails.caseStage}
                    onValueChange={(value) => setCaseDetails({ ...caseDetails, caseStage: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="चरण छान्नुहोस्" />
                    </SelectTrigger>
                    <SelectContent>
                      {caseStages.map((stage) => (
                        <SelectItem key={stage} value={stage}>
                          {stage}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="fileNumber">फाइल नम्बर</Label>
                  <Input
                    id="fileNumber"
                    value={caseDetails.fileNumber}
                    onChange={(e) => setCaseDetails({ ...caseDetails, fileNumber: e.target.value })}
                  />
                </div>
                <div>
                  <Label htmlFor="registrationFee">दर्ता शुल्क</Label>
                  <Input
                    id="registrationFee"
                    type="number"
                    value={caseDetails.registrationFee}
                    onChange={(e) => setCaseDetails({ ...caseDetails, registrationFee: e.target.value })}
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="disputeTopic">विवादको विषय *</Label>
                <Input
                  id="disputeTopic"
                  value={caseDetails.disputeTopic}
                  onChange={(e) => setCaseDetails({ ...caseDetails, disputeTopic: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="caseDescription">मुद्दाको विस्तृत विवरण *</Label>
                <Textarea
                  id="caseDescription"
                  rows={4}
                  value={caseDetails.caseDescription}
                  onChange={(e) => setCaseDetails({ ...caseDetails, caseDescription: e.target.value })}
                  required
                />
              </div>

              <div>
                <Label htmlFor="witnesses">साक्षीहरूको नाम</Label>
                <Textarea
                  id="witnesses"
                  rows={2}
                  value={caseDetails.witnesses}
                  onChange={(e) => setCaseDetails({ ...caseDetails, witnesses: e.target.value })}
                  placeholder="साक्षीहरूको नाम र ठेगाना लेख्नुहोस्"
                />
              </div>
            </CardContent>
          </Card>

          {/* First Parties */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#003893]">पहिलो पक्ष (निवेदक)</h3>
              <Button type="button" onClick={() => addParty("first")} className="bg-[#DC143C] hover:bg-[#DC143C]/90">
                <Plus className="h-4 w-4 mr-2" />
                पक्ष थप्नुहोस्
              </Button>
            </div>
            {firstParties.map((party, index) => renderPartyForm(party, index, "first"))}
          </div>

          {/* Second Parties */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-2xl font-bold text-[#003893]">दोस्रो पक्ष (विपक्षी)</h3>
              <Button type="button" onClick={() => addParty("second")} className="bg-[#DC143C] hover:bg-[#DC143C]/90">
                <Plus className="h-4 w-4 mr-2" />
                पक्ष थप्नुहोस्
              </Button>
            </div>
            {secondParties.map((party, index) => renderPartyForm(party, index, "second"))}
          </div>

          {/* Submit Button */}
          <div className="text-center pt-8">
            <Button
              type="submit"
              size="lg"
              className="bg-[#003893] hover:bg-[#003893]/90 text-white px-12 py-4 text-lg font-semibold"
            >
              उजुरी दर्ता गर्नुहोस्
            </Button>
          </div>
        </form>
      </div>
    </section>
  )
}
