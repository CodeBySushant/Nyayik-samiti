"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Badge } from "@/components/ui/badge"
import { Search, FileText, Phone, CreditCard, ArrowLeft, Calendar, User, MapPin } from "lucide-react"
import Link from "next/link"

export default function ComplaintTrackingPage() {
  const [trackingMethod, setTrackingMethod] = useState("citizenship")
  const [formData, setFormData] = useState({
    citizenshipNumber: "",
    caseNumber: "",
    mobileNumber: "",
  })
  const [trackingResults, setTrackingResults] = useState<any[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)

    // Simulate API call
    setTimeout(() => {
      // Mock tracking results with multiple cases
      setTrackingResults([
        {
          id: 1,
          caseNumber: "२०८१/०१/००१",
          caseSubject: "जग्गा विवाद",
          status: "सुनुवाई चरणमा",
          registrationDate: "२०८१/०१/१५",
          nextHearingDate: "२०८१/०२/०१",
          currentStage: "प्रारम्भिक सुनुवाई",
          firstParty: "राम बहादुर थापा",
          secondParty: "श्याम प्रसाद शर्मा",
          judgeName: "हरि प्रसाद अधिकारी",
        },
        {
          id: 2,
          caseNumber: "२०८०/१२/०२५",
          caseSubject: "पारिवारिक विवाद",
          status: "निर्णय भएको",
          registrationDate: "२०८०/१२/१०",
          nextHearingDate: "-",
          currentStage: "निर्णय कार्यान्वयन",
          firstParty: "राम बहादुर थापा",
          secondParty: "गीता देवी थापा",
          judgeName: "हरि प्रसाद अधिकारी",
        },
        {
          id: 3,
          caseNumber: "२०८०/११/०१२",
          caseSubject: "ऋण असुली",
          status: "समाप्त",
          registrationDate: "२०८०/११/०५",
          nextHearingDate: "-",
          currentStage: "मिलापत्र",
          firstParty: "राम बहादुर थापा",
          secondParty: "कृष्ण बहादुर गुरुङ",
          judgeName: "सीता देवी शर्मा",
        },
      ])
      setIsLoading(false)
    }, 2000)
  }

  const resetForm = () => {
    setFormData({
      citizenshipNumber: "",
      caseNumber: "",
      mobileNumber: "",
    })
    setTrackingResults([])
  }

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "सुनुवाई चरणमा":
        return <Badge className="bg-blue-500 hover:bg-blue-600">{status}</Badge>
      case "निर्णय भएको":
        return <Badge className="bg-orange-500 hover:bg-orange-600">{status}</Badge>
      case "समाप्त":
        return <Badge className="bg-green-500 hover:bg-green-600">{status}</Badge>
      default:
        return <Badge variant="secondary">{status}</Badge>
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-[#003893] text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center text-white hover:text-gray-200 transition-colors">
              <ArrowLeft className="h-5 w-5 mr-2" />
              फिर्ता
            </Link>
            <div>
              <h1 className="text-3xl font-bold">उजुरी ट्र्याकिङ</h1>
              <p className="text-blue-100 mt-2">आफ्नो उजुरीको स्थिति जान्नुहोस्</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Tracking Form */}
          <div className="lg:col-span-1">
            <Card className="border-2 border-[#003893]/20 sticky top-8">
              <CardHeader>
                <CardTitle className="text-xl text-[#003893] flex items-center">
                  <Search className="mr-2 h-5 w-5" />
                  खोज विकल्प
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Tracking Method Selection */}
                  <div>
                    <Label className="text-base font-semibold text-[#003893] mb-3 block">खोज्ने तरिका छान्नुहोस्</Label>
                    <RadioGroup value={trackingMethod} onValueChange={setTrackingMethod} className="space-y-3">
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="citizenship" id="citizenship" />
                        <Label htmlFor="citizenship" className="flex items-center cursor-pointer">
                          <CreditCard className="mr-2 h-4 w-4 text-[#DC143C]" />
                          नागरिकता नम्बर र मोबाइल नम्बर
                        </Label>
                      </div>
                      <div className="flex items-center space-x-2 p-3 border rounded-lg hover:bg-gray-50">
                        <RadioGroupItem value="case" id="case" />
                        <Label htmlFor="case" className="flex items-center cursor-pointer">
                          <FileText className="mr-2 h-4 w-4 text-[#DC143C]" />
                          मुद्दा नम्बर र मोबाइल नम्बर
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    {trackingMethod === "citizenship" ? (
                      <div>
                        <Label htmlFor="citizenshipNumber" className="flex items-center">
                          <CreditCard className="mr-2 h-4 w-4 text-[#DC143C]" />
                          नागरिकता नम्बर *
                        </Label>
                        <Input
                          id="citizenshipNumber"
                          value={formData.citizenshipNumber}
                          onChange={(e) => setFormData({ ...formData, citizenshipNumber: e.target.value })}
                          placeholder="उदाहरण: १२३४५६७८९०"
                          required
                        />
                      </div>
                    ) : (
                      <div>
                        <Label htmlFor="caseNumber" className="flex items-center">
                          <FileText className="mr-2 h-4 w-4 text-[#DC143C]" />
                          मुद्दा नम्बर *
                        </Label>
                        <Input
                          id="caseNumber"
                          value={formData.caseNumber}
                          onChange={(e) => setFormData({ ...formData, caseNumber: e.target.value })}
                          placeholder="उदाहरण: २०८१/०१/००१"
                          required
                        />
                      </div>
                    )}

                    <div>
                      <Label htmlFor="mobileNumber" className="flex items-center">
                        <Phone className="mr-2 h-4 w-4 text-[#DC143C]" />
                        मोबाइल नम्बर *
                      </Label>
                      <Input
                        id="mobileNumber"
                        value={formData.mobileNumber}
                        onChange={(e) => setFormData({ ...formData, mobileNumber: e.target.value })}
                        placeholder="उदाहरण: ९८४१२३४५६७"
                        required
                      />
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="flex gap-3">
                    <Button
                      type="submit"
                      disabled={isLoading}
                      className="flex-1 bg-[#003893] hover:bg-[#003893]/90 text-white"
                    >
                      {isLoading ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                          खोज्दै...
                        </>
                      ) : (
                        <>
                          <Search className="mr-2 h-4 w-4" />
                          खोज्नुहोस्
                        </>
                      )}
                    </Button>
                    <Button
                      type="button"
                      variant="outline"
                      onClick={resetForm}
                      className="border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white bg-transparent"
                    >
                      रिसेट
                    </Button>
                  </div>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Tracking Results */}
          <div className="lg:col-span-2">
            <Card className="border-2 border-[#DC143C]/20">
              <CardHeader>
                <CardTitle className="text-xl text-[#003893] flex items-center">
                  <FileText className="mr-2 h-5 w-5" />
                  उजुरीको स्थिति
                </CardTitle>
              </CardHeader>
              <CardContent>
                {trackingResults.length === 0 ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
                      <Search className="h-8 w-8 text-gray-400" />
                    </div>
                    <p className="text-gray-500">उजुरीको स्थिति हेर्न बायाँको फारम भर्नुहोस्</p>
                  </div>
                ) : (
                  <div className="space-y-6">
                    <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                      <div className="flex items-center mb-2">
                        <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                        <span className="font-semibold text-green-800">{trackingResults.length} वटा उजुरी फेला पर्यो</span>
                      </div>
                    </div>

                    {/* Results Table */}
                    <div className="overflow-x-auto">
                      <Table>
                        <TableHeader>
                          <TableRow>
                            <TableHead className="text-[#003893] font-semibold">मुद्दा नम्बर</TableHead>
                            <TableHead className="text-[#003893] font-semibold">विषय</TableHead>
                            <TableHead className="text-[#003893] font-semibold">स्थिति</TableHead>
                            <TableHead className="text-[#003893] font-semibold">दर्ता मिति</TableHead>
                            <TableHead className="text-[#003893] font-semibold">अर्को सुनुवाई</TableHead>
                            <TableHead className="text-[#003893] font-semibold">न्यायाधीश</TableHead>
                          </TableRow>
                        </TableHeader>
                        <TableBody>
                          {trackingResults.map((result) => (
                            <TableRow key={result.id} className="hover:bg-gray-50">
                              <TableCell className="font-medium text-[#003893]">{result.caseNumber}</TableCell>
                              <TableCell>{result.caseSubject}</TableCell>
                              <TableCell>{getStatusBadge(result.status)}</TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <Calendar className="h-4 w-4 mr-1 text-gray-500" />
                                  {result.registrationDate}
                                </div>
                              </TableCell>
                              <TableCell>
                                {result.nextHearingDate !== "-" ? (
                                  <div className="flex items-center text-orange-600 font-medium">
                                    <Calendar className="h-4 w-4 mr-1" />
                                    {result.nextHearingDate}
                                  </div>
                                ) : (
                                  <span className="text-gray-500">-</span>
                                )}
                              </TableCell>
                              <TableCell>
                                <div className="flex items-center">
                                  <User className="h-4 w-4 mr-1 text-gray-500" />
                                  {result.judgeName}
                                </div>
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </div>

                    {/* Additional Information */}
                    <div className="grid md:grid-cols-2 gap-4 mt-6">
                      <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                        <h4 className="font-semibold text-blue-800 mb-2 flex items-center">
                          <FileText className="h-4 w-4 mr-2" />
                          मुद्दाको विवरण
                        </h4>
                        <div className="text-blue-700 text-sm space-y-1">
                          <p>• पहिलो पक्ष: {trackingResults[0]?.firstParty}</p>
                          <p>• दोस्रो पक्ष: {trackingResults[0]?.secondParty}</p>
                          <p>• हालको चरण: {trackingResults[0]?.currentStage}</p>
                        </div>
                      </div>

                      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
                        <h4 className="font-semibold text-yellow-800 mb-2 flex items-center">
                          <MapPin className="h-4 w-4 mr-2" />
                          महत्वपूर्ण सूचना
                        </h4>
                        <ul className="text-yellow-700 text-sm space-y-1">
                          <li>• सुनुवाईको मिति र समयमा उपस्थित हुनुहोस्</li>
                          <li>• आवश्यक कागजातहरू साथमा ल्याउनुहोस्</li>
                          <li>• थप जानकारीको लागि कार्यालयमा सम्पर्क गर्नुहोस्</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
