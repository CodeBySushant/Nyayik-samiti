"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { ArrowLeft, Search, Phone, MapPin } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { useState } from "react"

interface Matchmaker {
  id: number
  name: string
  photo: string
  wardNumber: string
  phone: string
  bio: string
}

export default function MatchmakersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterWard, setFilterWard] = useState("all")

  const matchmakers: Matchmaker[] = [
    {
      id: 1,
      name: "श्री राम बहादुर थापा",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. १",
      phone: "९८४१२३४५६७",
      bio: "८ वर्षको अनुभव भएका पारिवारिक विवाद समाधानमा विशेषज्ञ मध्यस्थकर्ता। शान्तिपूर्ण समाधानमा विश्वास राख्छु।",
    },
    {
      id: 2,
      name: "श्रीमती सीता देवी शर्मा",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. २",
      phone: "९८५१२३४५६७",
      bio: "जग्गा जमिन विवाद समाधानमा १२ वर्षको अनुभव। न्यायपूर्ण र पारदर्शी समाधानको लागि प्रतिबद्ध।",
    },
    {
      id: 3,
      name: "श्री गोपाल प्रसाद पौडेल",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. ३",
      phone: "९८६१२३४५६७",
      bio: "व्यापारिक विवाद र ऋण सम्बन्धी मामिलामा विशेषज्ञता। द्रुत र प्रभावकारी समाधान प्रदान गर्छु।",
    },
    {
      id: 4,
      name: "श्री कृष्ण बहादुर गुरुङ",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. ४",
      phone: "९८७१२३४५६७",
      bio: "श्रमिक अधिकार र रोजगार सम्बन्धी विवादमा विशेषज्ञ। श्रमिकहरूको हक हितको संरक्षणमा प्रतिबद्ध।",
    },
    {
      id: 5,
      name: "श्रीमती रीता कुमारी यादव",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. ५",
      phone: "९८८१२३४५६७",
      bio: "सामुदायिक विवाद र महिला अधिकार सम्बन्धी मामिलामा अनुभवी। समुदायिक एकताको लागि काम गर्छु।",
    },
    {
      id: 6,
      name: "श्री दिनेश कुमार श्रेष्ठ",
      photo: "/placeholder.svg?height=150&width=150",
      wardNumber: "वडा नं. ६",
      phone: "९८९१२३४५६७",
      bio: "पारिवारिक मामिला र सम्पत्ति बाँडफाँडमा विशेषज्ञता। पारिवारिक एकताको संरक्षणमा जोड दिन्छु।",
    },
  ]

  const wardNumbers = [
    "वडा नं. १",
    "वडा नं. २",
    "वडा नं. ३",
    "वडा नं. ४",
    "वडा नं. ५",
    "वडा नं. ६",
    "वडा नं. ७",
    "वडा नं. ८",
    "वडा नं. ९",
  ]

  const filteredMatchmakers = matchmakers.filter((matchmaker) => {
    const matchesSearch = matchmaker.name.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesWard = filterWard === "all" || matchmaker.wardNumber === filterWard

    return matchesSearch && matchesWard
  })

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
              <h1 className="text-3xl font-bold">मध्यस्थकर्ताहरू</h1>
              <p className="text-blue-100 mt-2">योग्य र अनुभवी मध्यस्थकर्ताहरूको सूची</p>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter Section */}
        <Card className="mb-8">
          <CardContent className="p-6">
            <div className="flex items-center space-x-2 mb-4">
              <Search className="h-5 w-5 text-[#003893]" />
              <h2 className="text-lg font-semibold text-[#003893]">खोज र फिल्टर</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                <Input
                  placeholder="नाम खोज्नुहोस्..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10"
                />
              </div>
              <Select value={filterWard} onValueChange={setFilterWard}>
                <SelectTrigger>
                  <SelectValue placeholder="वडा छान्नुहोस्" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">सबै वडा</SelectItem>
                  {wardNumbers.map((ward) => (
                    <SelectItem key={ward} value={ward}>
                      {ward}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        {/* Results Summary */}
        <div className="mb-6">
          <p className="text-gray-600">
            <span className="font-semibold text-[#003893]">{filteredMatchmakers.length}</span> जना मध्यस्थकर्ता फेला पर्यो
          </p>
        </div>

        {/* Matchmakers Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMatchmakers.map((matchmaker) => (
            <Card
              key={matchmaker.id}
              className="border-2 border-gray-200 hover:border-[#DC143C] transition-all duration-300 hover:shadow-xl"
            >
              <CardContent className="p-6">
                {/* Profile Header */}
                <div className="text-center mb-4">
                  <div className="relative w-20 h-20 mx-auto mb-3">
                    <Image
                      src={matchmaker.photo || "/placeholder.svg"}
                      alt={matchmaker.name}
                      fill
                      className="rounded-full object-cover border-3 border-[#003893]"
                    />
                  </div>
                  <h3 className="text-lg font-bold text-[#003893] mb-2">{matchmaker.name}</h3>
                </div>

                {/* Ward Number */}
                <div className="text-center mb-4">
                  <div className="flex items-center justify-center">
                    <MapPin className="h-4 w-4 mr-2 text-[#DC143C]" />
                    <span className="font-medium text-[#DC143C]">{matchmaker.wardNumber}</span>
                  </div>
                </div>

                {/* Bio */}
                <p className="text-sm text-gray-600 mb-4 text-center line-clamp-3">{matchmaker.bio}</p>

                {/* Contact Button */}
                <div className="text-center">
                  <Button className="bg-[#003893] hover:bg-[#003893]/90">
                    <Phone className="h-4 w-4 mr-2" />
                    सम्पर्क गर्नुहोस्
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* No Results */}
        {filteredMatchmakers.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 mx-auto mb-4 bg-gray-100 rounded-full flex items-center justify-center">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <p className="text-gray-500 mb-4">खोजिएको मापदण्ड अनुसार कुनै मध्यस्थकर्ता फेला परेन</p>
            <Button
              onClick={() => {
                setSearchTerm("")
                setFilterWard("all")
              }}
              variant="outline"
              className="border-[#DC143C] text-[#DC143C] hover:bg-[#DC143C] hover:text-white"
            >
              फिल्टर रिसेट गर्नुहोस्
            </Button>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <Card className="bg-gradient-to-r from-[#003893] to-[#DC143C] text-white">
            <CardContent className="p-8">
              <h2 className="text-2xl font-bold mb-4">मध्यस्थकर्ता बन्न चाहनुहुन्छ?</h2>
              <p className="mb-6">तपाईं योग्य र अनुभवी हुनुहुन्छ भने हाम्रो मध्यस्थकर्ता टोलीमा सामेल हुनुहोस्</p>
              <Link href="/matchmaker-registration">
                <Button size="lg" variant="secondary" className="bg-white text-[#003893] hover:bg-gray-100">
                  मध्यस्थकर्ता दर्ता गर्नुहोस्
                </Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
