"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  FaPlay, 
  FaPause, 
  FaExpand, 
  FaImage, 
  FaVideo, 
  FaExternalLinkAlt,
  FaDownload,
  FaTimes
} from "react-icons/fa"
import { MdFullscreen, MdFullscreenExit } from "react-icons/md"

export type MediaItem = {
  type: 'image' | 'video' | 'demo' | 'github'
  src: string
  title: string
  description?: string
  thumbnail?: string
  external?: boolean
  downloadable?: boolean
}

interface MediaShowcaseProps {
  items: MediaItem[]
  title?: string
  className?: string
}

export function MediaShowcase({ items, title, className = "" }: MediaShowcaseProps) {
  const [selectedMedia, setSelectedMedia] = useState<MediaItem | null>(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPlaying, setIsPlaying] = useState(false)

  const openModal = (item: MediaItem) => {
    setSelectedMedia(item)
    setIsModalOpen(true)
    setIsPlaying(false)
  }

  const closeModal = () => {
    setIsModalOpen(false)
    setSelectedMedia(null)
    setIsPlaying(false)
  }

  const togglePlay = () => {
    setIsPlaying(!isPlaying)
  }

  const getMediaIcon = (type: MediaItem['type']) => {
    switch (type) {
      case 'image': return <FaImage />
      case 'video': return <FaVideo />
      case 'demo': return <FaExternalLinkAlt />
      case 'github': return <FaExternalLinkAlt />
      default: return <FaImage />
    }
  }

  const getMediaBadgeColor = (type: MediaItem['type']) => {
    switch (type) {
      case 'image': return 'bg-blue-100 text-blue-800'
      case 'video': return 'bg-red-100 text-red-800'
      case 'demo': return 'bg-green-100 text-green-800'
      case 'github': return 'bg-gray-100 text-gray-800'
      default: return 'bg-gray-100 text-gray-800'
    }
  }

  if (!items || items.length === 0) return null

  return (
    <>
      <div className={`space-y-4 ${className}`}>
        {title && (
          <h4 className="text-sm font-medium text-muted-foreground flex items-center gap-2">
            <FaImage className="text-xs" />
            {title}
          </h4>
        )}
        
        <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
          {items.map((item, index) => (
            <Card 
              key={index}
              className="group relative overflow-hidden border-dashed-indie hover:shadow-md transition-all duration-300 cursor-pointer hover:scale-105"
              onClick={() => openModal(item)}
            >
              <div className="aspect-video relative bg-muted/20">
                {item.type === 'video' ? (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <video 
                      src={item.thumbnail || item.src}
                      className="w-full h-full object-cover"
                      muted
                      preload="metadata"
                    />
                    <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                      <FaPlay className="text-white text-2xl drop-shadow-lg" />
                    </div>
                  </div>
                ) : item.type === 'image' ? (
                  <div className="absolute inset-0">
                    <img 
                      src={item.thumbnail || item.src}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <FaExpand className="text-white text-lg opacity-0 group-hover:opacity-100 transition-opacity drop-shadow-lg" />
                    </div>
                  </div>
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/10 to-primary/5">
                    <div className="text-center space-y-2">
                      <div className="text-2xl text-primary">
                        {getMediaIcon(item.type)}
                      </div>
                      <div className="text-xs font-medium text-muted-foreground">
                        {item.type === 'demo' ? 'Live Demo' : 'View'}
                      </div>
                    </div>
                  </div>
                )}
                
                {/* Type Badge */}
                <div className="absolute top-2 left-2">
                  <Badge className={`text-xs ${getMediaBadgeColor(item.type)} border-dashed-indie`}>
                    {item.type}
                  </Badge>
                </div>

                {/* External link indicator */}
                {item.external && (
                  <div className="absolute top-2 right-2">
                    <FaExternalLinkAlt className="text-xs text-muted-foreground" />
                  </div>
                )}
              </div>
              
              <div className="p-3">
                <h5 className="text-sm font-medium truncate">{item.title}</h5>
                {item.description && (
                  <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                    {item.description}
                  </p>
                )}
              </div>
            </Card>
          ))}
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && selectedMedia && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-4xl max-h-[90vh] bg-background rounded-lg border border-dashed-indie overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-dashed-indie">
              <div className="space-y-1">
                <h3 className="font-semibold">{selectedMedia.title}</h3>
                {selectedMedia.description && (
                  <p className="text-sm text-muted-foreground">{selectedMedia.description}</p>
                )}
              </div>
              <div className="flex items-center gap-2">
                {selectedMedia.downloadable && (
                  <button 
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                    onClick={() => window.open(selectedMedia.src, '_blank')}
                  >
                    <FaDownload className="text-sm" />
                  </button>
                )}
                {selectedMedia.external && (
                  <button 
                    className="p-2 hover:bg-muted rounded-md transition-colors"
                    onClick={() => window.open(selectedMedia.src, '_blank')}
                  >
                    <FaExternalLinkAlt className="text-sm" />
                  </button>
                )}
                <button 
                  onClick={closeModal}
                  className="p-2 hover:bg-muted rounded-md transition-colors"
                >
                  <FaTimes className="text-sm" />
                </button>
              </div>
            </div>

            {/* Content */}
            <div className="relative">
              {selectedMedia.type === 'video' ? (
                <div className="relative">
                  <video 
                    src={selectedMedia.src}
                    className="w-full max-h-[70vh] object-contain bg-black"
                    controls
                    autoPlay
                  />
                </div>
              ) : selectedMedia.type === 'image' ? (
                <div className="flex items-center justify-center p-4 bg-muted/20">
                  <img 
                    src={selectedMedia.src}
                    alt={selectedMedia.title}
                    className="max-w-full max-h-[70vh] object-contain rounded"
                  />
                </div>
              ) : (
                <div className="p-8 text-center space-y-4">
                  <div className="text-4xl text-primary">
                    {getMediaIcon(selectedMedia.type)}
                  </div>
                  <div className="space-y-2">
                    <h4 className="text-lg font-medium">{selectedMedia.title}</h4>
                    {selectedMedia.description && (
                      <p className="text-muted-foreground">{selectedMedia.description}</p>
                    )}
                  </div>
                  <button 
                    onClick={() => window.open(selectedMedia.src, '_blank')}
                    className="inline-flex items-center gap-2 px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    <FaExternalLinkAlt className="text-sm" />
                    {selectedMedia.type === 'demo' ? 'Open Demo' : 'View'}
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  )
}